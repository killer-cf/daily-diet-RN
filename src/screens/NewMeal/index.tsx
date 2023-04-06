import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { Alert, View } from "react-native";
import { Content, Header, Container, ButtonIcon, IconArrow, Title, InputBox, Label, InputBoxesRow, InputBoxDouble, InputText, RadiosContainer, InputPicker, Placeholder, DateTimePickerContainer } from "./styles";
import { Radio } from "@components/Radio";
import { useContext, useState } from "react";
import { DietStatusParams } from "src/@types/navigation";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { dateFormatter, timeFormatter } from "@utils/formatter";
import { Meal } from "@storage/storageConfig";
import { mealCreate } from "@storage/meals/mealCreate";
import { AppError } from "@utils/AppError";

export function NewMeal() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('')
  const [show, setShow] = useState(false)
  const [fDate, setFdate] = useState(dateFormatter.format(new Date()))
  const [fTime, setFtime] = useState(timeFormatter.format(new Date()))
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [dietStatus, setDietStatus] = useState<DietStatusParams>('onDiet')

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

  async function handleCreateNewMeal(){
    if(name.trim().length === 0 || description.trim().length === 0) {
      return Alert.alert('Cadastro de refeição', 'Informe o nome e descrição para adicionar')
    }

    const newMeal: Meal = {
      id: String(new Date().getTime()),
      name,
      description,
      date: fDate,
      hour: fTime,
      onDiet: dietStatus === 'onDiet' ? true : false
    }

    try {
      await mealCreate(newMeal)
      navigator.navigate('create_meal_success', { dietStatus })
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
          Nova refeição
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
          text="Cadastrar refeição" 
          onPress={handleCreateNewMeal}
        />
      </Content>
    </Container>
  )
}