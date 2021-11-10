import * as React from "react"
import styled from "@emotion/native"
import { SafeAreaView, View, Image } from "react-native"

export default function Detail(){
    return(
        <>
            <SafeArea>
                <Header>
                    <PrevButton source={{uri:"/public/images/Icon/BackIcon.png"}}>
                    {/* <HeaderTitle>11/1의 두게더</HeaderTitle> */}
                    {/* <EditButton></EditButton> */}
                    {/* <DeleteButton></DeleteButton> */}
                </Header>
                {/* <Body>
                    <BodyTitle>간식 차려먹기</BodyTitle>
                    <BodyContent>콘푸라이트 한그릇 맛있게 먹기</BodyContent>
                </Body> */}
                {/* <Body2>
                    <Location>🏠  집</Location>
                    <DueDate>🗓  2021.11.23</DueDate>
                    <Friends>👥  홍길동, 둘리</Friends>
                    <Important>🔴  우선순위 1</Important>
                </Body2> */}
                {/* <Footer>
                    <InnerFooter >
                        <Input placeholder="댓글을 입력하세요"></Input>
                        <SendIcon></SendIcon>
                    </InnerFooter>
                </Footer> */}
            </SafeArea>
        </>
    )
}

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    background-color: #ffffff;
`
const Header = styled(View)`
    width: 100%;
    height: 80px;
    background-color: orange;
    /* box-shadow: 0px 5px 15px -5px rgba(81, 128, 153, 0.15); */
`
const PrevButton = styled(Image)`
    width: 20px ;
    height: 20px;
`
