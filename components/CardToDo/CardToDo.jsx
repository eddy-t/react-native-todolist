import { TouchableOpacity, Text, Image } from "react-native";
import checkIcon from "../../assets/check.png";
import { s } from "./CardToDo.style";

export function CardToDo({ todo, onPress, onLongPress }) {
  return (
    <TouchableOpacity
      onLongPress={() => onLongPress(todo)}
      onPress={() => onPress(todo)}
      style={s.card}
    >
      <Text
        style={[
          s.txt,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isCompleted && <Image style={s.img} source={checkIcon} />}
    </TouchableOpacity>
  );
}
