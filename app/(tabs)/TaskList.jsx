import { Text } from "react-native";
import { useTaskContext } from '../../providers/TaskProvider';
import {
  StyledFlatList,
  Li,
  StyledSubtitle,
  StyledContainer,
  StyledImage,
} from "../../styles";
import taskimage from "../../assets/tasks.png";

const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <StyledContainer>
      <StyledImage source={taskimage} />
      <StyledSubtitle>Mis tareas</StyledSubtitle>
      <StyledFlatList
        data={tasks}
        renderItem={({ item }) => <Li><Text>{item}</Text></Li>}
        keyExtractor={(item, index) => item + index}
      />
    </StyledContainer>
  );
};

export default TaskList;
