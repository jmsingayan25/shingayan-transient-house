import { StyleSheet } from "react-native";

const primaryColor = '#eca434';
const whiteColor = '#ffffff';
const blackColor = '#000000';
const grayColor = '##e4f7e9';
const baseWidth = 15;

const colors = {
    primaryColor: primaryColor,
    whiteColor: whiteColor,
    blackColor: blackColor,
    grayColor: grayColor
}

const styles = StyleSheet.create({
    m1: {
        margin: baseWidth
    },
    mT1: {
        marginTop: baseWidth
    },
    mT2: {
        marginTop: baseWidth * 2
    },
    mT3: {
        marginTop: baseWidth * 3
    },
    mT4: {
        marginTop: baseWidth * 4
    },
    mT5: {
        marginTop: baseWidth * 5
    },
    mB1: {
        marginBottom: baseWidth
    },
    mB2: {
        marginBottom: baseWidth * 2
    },
    mB3: {
        marginBottom: baseWidth * 3
    },
    mL0: {
        marginLeft: 0
    },
    mL1: {
        marginLeft: baseWidth
    },
    mL2: {
        marginLeft: baseWidth * 2
    },
    mL3: {
        marginLeft: baseWidth * 3
    },
    mR1: {
        marginRight: baseWidth
    },
    mX1: {
        marginLeft: baseWidth,
        marginRight: baseWidth
    },
    mX2: {
        marginLeft: baseWidth * 2,
        marginRight: baseWidth * 2
    },
    mX3: {
        marginLeft: baseWidth * 3,
        marginRight: baseWidth * 3
    },
    mY1: {
        marginTop: baseWidth,
        marginBottom: baseWidth
    },
    mY2: {
        marginTop: baseWidth * 2,
        marginBottom: baseWidth * 2
    },
    mY3: {
        marginTop: baseWidth * 3,
        marginBottom: baseWidth * 3
    },
    p1: {
        padding: baseWidth
    },
    p2: {
        padding: baseWidth * 2
    },
    p3: {
        padding: baseWidth * 3
    },
    pL1:{
        paddingLeft: baseWidth
    },
    pL2:{
        paddingLeft: baseWidth * 2
    },
    pL2:{
        paddingLeft: baseWidth * 3
    },
    pR1:{
        paddingRight: baseWidth
    },
    pX1: {
        paddingLeft: baseWidth,
        paddingRight: baseWidth
    },
    pX2: {
        paddingLeft: baseWidth * 2,
        paddingRight: baseWidth * 2
    },
    pX3: {
        paddingLeft: baseWidth * 3,
        paddingRight: baseWidth * 3
    },
    pY1: {
        paddingTop: baseWidth,
        paddingBottom: baseWidth
    },
    pY2: {
        paddingTop: baseWidth * 2,
        paddingBottom: baseWidth * 2
    },
    pY3: {
        paddingTop: baseWidth * 3,
        paddingBottom: baseWidth * 3
    },
    pY4: {
        paddingTop: baseWidth * 4,
        paddingBottom: baseWidth * 4
    },
    pY5: {
        paddingTop: baseWidth * 5,
        paddingBottom: baseWidth * 5
    },
    pB1: {
        paddingBottom: baseWidth
    },
    pB2: {
        paddingBottom: baseWidth * 2
    },
    pB3: {
        paddingBottom: baseWidth * 3
    },
    pT1: {
     paddingTop: baseWidth
    },
    pT2: {
        paddingTop: baseWidth * 2
    },
    pT3: {
        paddingTop: baseWidth * 3
    },
    alignItemCenter :{
        alignItems: 'center',
    },
    alignItemStart :{
        alignItems: 'flex-start',
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    justifySpaceBetween: {
        justifyContent: 'space-between'
    },
    justifyFlexStart: {
        justifyContent: 'flex-start'
    },
    justifyFlexEnd: {
        justifyContent: 'flex-end'
    },
    flex1 :{
        flex: 1,
    },
    flex2 :{
        flex: 2,
    },
    flex3 :{
        flex: 3,
    },
    flex4 :{
        flex: 4,
    },
    flex5 :{
        flex: 5,
    },
    flexDirectionRow: {
        flexDirection: 'row'
    },
    flexDirectionColumn: {
        flexDirection: 'column'
    },
    textCenter: {
        textAlign: 'center'
    },
    textUppercase: {
        textTransform: 'uppercase'
    },
    textLowercase: {
        textTransform: 'lowercase'
    },
    textBold: {
        fontWeight: 'bold'
    },
    textItalic: {
        fontStyle: 'italic'
    },
    textUnderline: {
        textDecorationLine: 'underline'
    },
    textWhite: {
        color: whiteColor
    },
    textPrimary: {
        color: primaryColor
    },
    imageContainer: {
        borderRadius: 20,
        width: '80%'
    }
})

export { styles, colors };