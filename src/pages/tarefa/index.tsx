import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  Input,
  VStack,
  Text,
  Divider,
} from "@chakra-ui/react";
 
const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
 
  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setTarefas([...tarefas, { titulo: novaTarefa, realizada: false }]);
      setNovaTarefa("");
    }
  };
 
  const excluirTarefa = (indice) => {
    const tarefasAtualizadas = tarefas.filter((_, i) => i !== indice);
    setTarefas(tarefasAtualizadas);
  };
 
  const alternarRealizacao = (indice) => {
    const tarefasAtualizadas = tarefas.map((tarefa, i) =>
      i === indice ? { ...tarefa, realizada: !tarefa.realizada } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };
 
  return (
<Box
      p={5}
      maxW="md"
      mx="auto"
      mt={10}
      bg="white"
      color="black"
      borderRadius="md"
      boxShadow="md"
>
<Heading mb={6} textAlign="center">
        Lista de Tarefas
</Heading>
<Text fontSize='2x1'>Inserir nova tarefa</Text>
<VStack spacing={4} align="stretch">
<HStack>

<Input
            placeholder="Digite o título da task"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />
<Button onClick={adicionarTarefa} colorScheme="blue">
            Inserir
</Button>
</HStack>
<Divider />
        {tarefas.length > 0 ? (
<VStack spacing={3} align="stretch">
            {tarefas.map((tarefa, indice) => (
<HStack
                key={indice}
                justify="space-between"
                align="center"
                p={3}
                bg="gray.100"
                borderRadius="md"
>
<Checkbox
                  isChecked={tarefa.realizada}
                  onChange={() => alternarRealizacao(indice)}
>
<Text as={tarefa.realizada ? "del" : ""}>
                    {tarefa.titulo}
</Text>
</Checkbox>
<HStack>
<Button
                    colorScheme={tarefa.realizada ? "green" : "red"}
                    onClick={() => alternarRealizacao(indice)}
                    mr={2}
>
                    {tarefa.realizada ? "Realizada" : "Pendente"}
</Button>
<Button
                    colorScheme="red"
                    onClick={() => excluirTarefa(indice)}
>
                    Excluir
</Button>
</HStack>
</HStack>
            ))}
</VStack>
        ) : (
<Text textAlign="center" color="gray.500">
            Nenhuma tarefa adicionada.
</Text>
        )}
</VStack>
</Box>
  );
};
 
export default ListaDeTarefas;

