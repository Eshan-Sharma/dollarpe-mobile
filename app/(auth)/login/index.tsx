import { Text, View } from "react-native";
import { EmailInput } from "../../../components/auth/EmailInput";

export default function SignupEmailScreen() {
  return (
    <View>
      <Text>Enter your email</Text>
      <EmailInput
        onChangeText={(text) => {
          /* Handle email change */
        }}
      />
    </View>
  );
}
