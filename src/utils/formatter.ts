export const dateFormatter = new Intl.DateTimeFormat('pt-BR')
export const timeFormatter = new Intl.DateTimeFormat('pt-BR', 
  {
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: false
  }
)