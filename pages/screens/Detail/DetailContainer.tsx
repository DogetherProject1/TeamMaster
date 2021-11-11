import * as React from "react"
import {
    SafeArea,
    Header,
    Button,
    Button2,
    HeaderTitle,
    Body,
    BodyTitle,
    BodyContent,
    Body2,
    BodyText,
    Body3,
    Footer,
    InnerFooter,
    InputBar,
    SendIcon
} from "./DetailStyles"
import {ScrollView} from "react-native"


export default function Detail(){

    // dummy data
    const Aaa = [
        {aaa: "🏠  집", bbb: "🗓  2021.11.23", ccc: "👥  홍길동, 둘리", ddd: "🔴  우선순위 1"},
    ]



    return(
        <>
            <SafeArea>
                <Header>
                    <Button
                        // onPressOut={()=>navigation.navigate('Calendar')}
                        source={require("../../../public/images/List/prev.png")}
                    />
                    <HeaderTitle>11/1의 두게더</HeaderTitle>
                    <Button2 source={require("../../../public/images/List/pencil.png")}/>
                    <Button source={require("../../../public/images/List/delete.png")}/>
                </Header>
                <Body>
                    <BodyTitle>간식 차려먹기</BodyTitle>
                    <BodyContent>콘푸라이트 한그릇 맛있게 먹기</BodyContent>
                </Body>
                <Body2 >
                    <ScrollView horizontal={true}>
                        {Aaa.map((el) => (
                            <>
                                <BodyText>{el.aaa}</BodyText>
                                <BodyText>{el.bbb}</BodyText>
                                <BodyText>{el.ccc}</BodyText>
                                <BodyText>{el.ddd}</BodyText>
                            </>
                        ))}
                    </ScrollView>
                </Body2>
                <Body3></Body3>
                <Footer>
                    <InnerFooter> 
                        <InputBar 
                            placeholder="댓글을 입력하세요"
                            placeholderTextColor={"#888888"}
                        />
                        <SendIcon source={require("../../../public/images/List/send.png")}/>
                    </InnerFooter>
                </Footer>
            </SafeArea>
        </>
    )
}
