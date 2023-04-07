import { useState } from "react";
import { Alert, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { 
  Content, 
  Header, 
  Container, 
  ButtonIcon, 
  IconArrow, 
  Title, 
  InputBox, 
  Label, 
  InputBoxesRow, 
  InputBoxDouble, 
  InputText, 
  RadiosContainer, 
  InputPicker, 
  Placeholder, 
  DateTimePickerContainer 
} from "./styles";
import { Radio } from "@components/Radio";
import { Button } from "@components/Button";
import { DietStatusParams } from "src/@types/navigation";
import { dateFormatter, timeFormatter } from "@utils/formatter";
import { Meal } from "@storage/storageConfig";
import { mealCreate } from "@storage/meals/mealCreate";
import { AppError } from "@utils/AppError";
import { mealEdit } from "@storage/meals/mealEdit";

type RouteMealDataParams = {
  mealData: Meal,
}

export function NewMeal() {
  const route = useRoute();
  let mealData = route.name === 'edit_meal' ? (route.params as RouteMealDataParams).mealData : null;
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('')
  const [show, setShow] = useState(false)
  const [fDate, setFdate] = useState(mealData?.date || dateFormatter.format(new Date()))
  const [fTime, setFtime] = useState(mealData?.hour || timeFormatter.format(new Date()))
  const [name, setName] = useState(mealData?.name || '')
  const [description, setDescription] = useState(mealData?.description || '')
  const [dietStatus, setDietStatus] = useState<DietStatusParams>(
    mealData ? (mealData.onDiet && 'onDiet' || 'offDiet') : 'onDiet'
  )

  const navigator = useNavigation()

  function showMode(currentMode: string) {
    setShow(true)
    setMode(currentMode)
  }

  function onChange(event: DateTimePickerEvent, selectedDate: Date){
    const currentDate = selectedDate || date
    setDate(currentDate)

    if(mode === 'time') {
      setFtime(timeFormatter.format(new Date(currentDate)))
    }
    if(mode === 'date') {
      setFdate(dateFormatter.format(new Date(currentDate)))
    }
  }

  async function handleMeal() {
    if(name.trim().length === 0 || description.trim().length === 0) {
      return Alert.alert('Cadastro de refeição', 'Informe o nome e descrição para adicionar')
    }

    const meal: Meal = {
      id: mealData ? mealData.id : String(new Date().getTime()),
      name,
      description,
      date: fDate,
      hour: fTime,
      onDiet: dietStatus === 'onDiet' ? true : false
    }
  
    try {
      if(mealData) {
        await mealEdit(meal)
        navigator.navigate('create_meal_success', { dietStatus })
      } else {
        await mealCreate(meal)
        navigator.navigate('create_meal_success', { dietStatus })
      }
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Nova refeição', error.message)
      } else {
        Alert.alert('Nova refeição','Não foi possível criar uma nova refeição')
        console.log(error)
      }
    }
  }  

  return (
    <Container>
      <Header>
        <ButtonIcon onPress={()=> navigator.navigate('home')}>
          <IconArrow />
        </ButtonIcon>
        <Title>
          {route.name === 'new_meal' ? 'Nova' : 'Editar'} refeição
        </Title>
      </Header>
      <Content>
        <View>
          <InputBox>
            <Label>Nome</Label>
            <InputText
              value={name}
              onChangeText={setName}
            />
          </InputBox>
          <InputBox>
            <Label>Descrição</Label>
            <InputText 
              style={{height: 120}}
              multiline
              value={description}
              onChangeText={setDescription}
            />
          </InputBox>
          <InputBoxesRow>
            <InputBoxDouble>
              <Label>Data</Label>
              <InputPicker onPress={() => showMode('date')} >
                <Placeholder>{fDate}</Placeholder>
              </InputPicker>
            </InputBoxDouble>
            <InputBoxDouble>
              <Label>Hora</Label>
              <InputPicker  onPress={() => showMode('time')}>
                <Placeholder>{fTime}</Placeholder>
              </InputPicker>
            </InputBoxDouble>
          </InputBoxesRow>
          {show && 
            <DateTimePickerContainer>
              <Title>Selecione a {mode === 'time'? 'hora' : 'data'}</Title>
              <DateTimePicker 
                value={date}
                mode={mode}
                display="spinner"
                onChange={onChange}
              />
              <Button text="OK" onPress={()=> setShow(false)} />
            </DateTimePickerContainer>
          }

          <Label>Está dentro da dieta?</Label>
          <RadiosContainer>
            <Radio 
              isActive={dietStatus === 'onDiet'} 
              onPress={()=> setDietStatus('onDiet')}
              text="Sim" 
              status_color="green"
            />
            <Radio 
              isActive={dietStatus === 'offDiet'} 
              onPress={()=> setDietStatus('offDiet')}
              text="Não" 
              status_color="red" />
          </RadiosContainer>
        </View>
        <Button 
          text={`${route.name === 'new_meal' ? 'Cadastrar' : 'Editar'} refeição`}
          onPress={handleMeal}
        />
      </Content>
    </Container>
  )
}