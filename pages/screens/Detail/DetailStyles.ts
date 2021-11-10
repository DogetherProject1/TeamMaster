import styled from "@emotion/native"
import { SafeAreaView, View, Image, Text } from "react-native"


export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: #ffffff;
`
export const Header = styled(View)`
    width: 100%;
    height: 80px;
    padding: 0px 32px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    elevation: 4;
`
export const PrevButton = styled(Image)`
    width: 20px;
    height: 20px;
`
export const HeaderTitle = styled(Text)`
    
`