import * as React from "react"
import {
    SafeArea,
    Header,
    PrevButton,
    HeaderTitle,
} from "./DetailStyles"

export default function DetailUI(){
    return(
        <>
            <SafeArea>
                <Header>
                    <PrevButton source={require("../../../public/images/List/prev.png")}/>
                    <HeaderTitle>11/1의 두게더</HeaderTitle>
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