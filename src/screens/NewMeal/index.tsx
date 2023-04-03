import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Content, Header, Container, ButtonIcon, IconArrow, Title, InputBox, Label, InputBoxesRow, InputBoxDouble, InputText, RadiosContainer, InputPicker, Placeholder, DateTimePickerContainer } from "./styles";
import { Radio } from "@components/Radio";
import { useState } from "react";
import { DietStatusParams } from "src/@types/navigation";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { dateFormatter, timeFormatter } from "@utils/formatter";

export function NewMeal() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('')
  const [show, setShow] = useState(false)
  const [fDate, setFdate] = useState(dateFormatter.format(new Date()))
  const [fTime, setFtime] = useState(timeFormatter.format(new Date()))

  const navigator = useNavigation()
  const [dietStatus, setDietStatus] = useState<DietStatusParams>('onDiet')

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
            <InputText />
          </InputBox>
          <InputBox>
            <Label>Descrição</Label>
            <InputText 
              style={{height: 120}}
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
          onPress={()=> 
            navigator.navigate('create_meal_success', { dietStatus })} />
      </Content>
    </Container>
  )
}