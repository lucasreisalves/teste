import { HStack, Heading, VStack, Text } from "native-base";

export function HistoryCard() {
    return (
        <HStack w="full" px={5} py={4} mb={3} bg="blueGray.800" rounded="md" alignItems="center" justifyContent="space-between" >
            <VStack mr={5} flex={1}>
            <Heading color="white" fontSize="md" textTransform="capitalize" fontFamily="heading" numberOfLines={1}>
                    TREINO A
                </Heading>

                <Text color="gray.100" fontSize="lg" numberOfLines={1} >
                   Programa 01 
                </Text>
            </VStack>

            <Text color="gray.300" fontSize="md" >
                9:09
            </Text>
        </HStack>
    );
}