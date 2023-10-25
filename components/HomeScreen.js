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
     {/* <Text>Bienvenido {route.params.email}</Text>*/}
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 12,
          minLength: 4,
          pattern:/^[0-9]+$/
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
      {errors.idUser?.type == "maxLength" && <Text style={{ color: 'red' }}>La Longitud Maxima Debe Ser Hasta 12 Chars. </Text>}
      {errors.idUser?.type == "minLength" && <Text style={{ color: 'red' }}>La Longitud Mínima Es  De 4 Chars. </Text>}
      {errors.idUser?.type == "pattern" && <Text style={{ color: 'red' }}>Debe Ingresar Solo Numeros. </Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 30,
          minLength: 3,
          pattern:/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nombre Completo"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullname"
      />
      {errors.fullname?.type == "required" && <Text style={{ color: 'red' }}>Nombre Completo Es Obligatorio.</Text>}
      {errors.fullname?.type == "maxLength" && <Text style={{ color: 'red' }}>La Longitud Maxima Debe Ser Hasta 30 Chars. </Text>}
      {errors.fullname?.type == "minLength" && <Text style={{ color: 'red' }}>La Longitud Mínima Es  De 3 Chars. </Text>}
      {errors.fullname?.type == "pattern" && <Text style={{ color: 'red' }}>Debe Ingresar Solo Letras. </Text>}


      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 256,
          minLength: 10,
          pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" /
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Correo Electronico"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email?.type == "required" && <Text style={{ color: 'red' }}>El Correo Es Obligatorio.</Text>}
      {errors.email?.type == "maxLength" && <Text style={{ color: 'red' }}>La Longitud Maxima Debe Ser Hasta 265 Chars. </Text>}
      {errors.email?.type == "minLength" && <Text style={{ color: 'red' }}>La Longitud Mínima Es  De 10 Chars. </Text>}
      {errors.email?.type == "pattern" && <Text style={{ color: 'red' }}>Debe Ingresar Un Correo Valido. </Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 9,
          minLength: 8,
          pattern:/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Contraseña"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="passaword"
      />
      {errors.passaword?.type == "required" && <Text style={{ color: 'red' }}>La Contraseña Es Obligatoria.</Text>}
      {errors.passaword?.type == "maxLength" && <Text style={{ color: 'red' }}>La Longitud Maxima Debe Ser Hasta 9 Chars. </Text>}
      {errors.passaword?.type == "minLength" && <Text style={{ color: 'red' }}>La Longitud Mínima Es  De 8 Chars. </Text>}
      {errors.passaword?.type == "pattern" && <Text style={{ color: 'red' }}>Debe Ingresar Una Contraseña Validad debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos. </Text>}
     
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 200,
          minLength: 20,
          pattern:/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Uri"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="uri"
      />
      {errors.uri?.type == "required" && <Text style={{ color: 'red' }}>La Uri Es Obligatoria.</Text>}
      {errors.uri?.type == "maxLength" && <Text style={{ color: 'red' }}>La Longitud Maxima Debe Ser Hasta 200 Chars. </Text>}
      {errors.uri?.type == "minLength" && <Text style={{ color: 'red' }}>La Longitud Mínima Es  De 20 Chars. </Text>}
      {errors.uri?.type == "pattern" && <Text style={{ color: 'red' }}>Debe Ingresar Una Uri Correcta </Text>}


      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 100,
          minLength: 19,
          pattern:/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Edad"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="age"
      />
      {errors.age?.type == "required" && <Text style={{ color: 'red' }}>La Edad Es Obligartoria.</Text>}
      {errors.age?.type == "maxLength" && <Text style={{ color: 'red' }}>La Edad Maxima Debe Ser De 100 Años. </Text>}
      {errors.age?.type == "minLength" && <Text style={{ color: 'red' }}>La Edad Minima Es De 19 Años. </Text>}
      {errors.age?.type == "pattern" && <Text style={{ color: 'red' }}>Debe Ingresar Una Edad Correcta </Text>}
     

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