import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default function Incidents() {
  return (
    <View>
      <View>
        <Image source={logoImg} />
        <Text>
          Total de <Text>0 casos.</Text>
        </Text>
      </View>
      <Text>Bem-Vindo</Text>
      <Text>Escolha um dos casos abaixo e salve o dia.</Text>
      <View>
        <View>
          <Text>ONG:</Text>
          <Text>APAD</Text>

          <Text>CASO:</Text>
          <Text>Cachorro atropelado</Text>

          <Text>VALOR:</Text>
          <Text>130,00</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text>Ver mais Detalhes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
