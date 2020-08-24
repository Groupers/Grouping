const { TextInput } = require("react-native-gesture-handler");

const App =() => {
  const [text, setText]
  const handleChange = e => {
    const {name, value } = e.target;
    setText({
      [name]: value
    })
  }
  return (
    <TextInput name="a" value={a}/>
    <TextInput name="b"/>
    <TextInput name="d"/>
    <TextInput name="c"/>

  )
}