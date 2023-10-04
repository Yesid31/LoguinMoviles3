import { View, Text } from 'react-native'
import { useForm, Controller } from "react-hook-form"
import { TextInput, Button } from 'react-native-paper';
export default function HomeScreen({ navigation, route }) {
  const {
    control,
    handleSubmit, reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      idUser: "",
      fullname: "",
      email: "",
      passaword: "",
      uri: "",
      age: ""
    },
  })
  const onSubmit = (data) => console.log(data);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bienvenido {route.params.email}</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 12,
          minLength: 4
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Identificación"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="idUser"
      />
      {errors.idUser?.type == "required" && <Text style={{ color: 'red' }}>Id del usuario es obligatorio.</Text>}
      {errors.idUser?.type == "maxLength" && <Text style={{ color: 'red' }}>La Longitud Debe Ser Hasta 30 Chars. </Text>}
      {errors.idUser?.type == "minLength" && <Text style={{ color: 'red' }}>La Longitud Mínima Es  De 4 Chars. </Text>}


      <Button
        style={{ marginTop: 20, backgroundColor: 'yellow' }}
        icon="content-save"
        mode="outlined"
        onPress={handleSubmit(onSubmit)}
      >
        Guardar
      </Button>


      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} />*/}

    </View>
  );
}