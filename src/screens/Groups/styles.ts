import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    background-color: ${theme.COLORS.GRAY_600};
  `}
  flex: 1;
  padding: 24px;
`;
