import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    ScrollView,
    Text,
    ImageEditor,
    Button,
    Image,
    View,
    PanResponder,
    LayoutAnimation,
    Alert,
}
    from
        'react-native';
import Croper from "./Croper";
const WIDTH = Dimensions.get("window").width;


const _IMG = "data:image/jpeg;base64,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";


export default class App extends Component<{}> {


    constructor() {
        super();
        this.state = {
            myUrl: {uri: _IMG},
            imgList: [],
        }
        this.croper = new Croper(_IMG);


        //存放哪些块
        this.actBox = {
            up: {},
            down: {},
            left: {},
            right: {},
        }
        this._start();

    }

    _start() {
        this.croper.crop(3, 3).then((json) => {

            this.setState({imgList: this._upset(json.imageList)});
            this._getActBox();
        });
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderRelease: this._handlePanResponderMove.bind(this),
        });

    }

    _handlePanResponderMove(e, gestureState) {
        let minRange = 20;
        if (gestureState.dy < minRange * -1) {
            this._move("up");

        }
        else if (gestureState.dy > minRange) {
            this._move("down");
        }
        else if (gestureState.dx < minRange * -1) {
            this._move("left");
        }
        else if (gestureState.dx > minRange) {
            this._move("right");
        }
    }


    //打乱图片  并且加上索引  抠出最后一张图
    _upset(arr) {


        let result = arr;
        let indexList = [];
        for (let i = 0; i < arr.length; i++) {
            indexList.push(i);
        }
        //打乱顺序


        //这样打乱的方式不对   详情见https://baike.baidu.com/item/%E4%B8%8D%E5%8F%AF%E8%BF%98%E5%8E%9F%E7%9A%84%E6%8B%BC%E5%9B%BE
        // indexList = indexList.sort(function () {
        //     return (0.5 - Math.random());
        // });
        let shuffle = () => {
            //数字我们只能交换偶数次
            let count = parseInt(10 + Math.random() * 10) * 2;//20+40次交换
            for (let i = 0; i < 2; i++) {
                let hold = null;
                var change1 = parseInt(Math.random() * (arr.length - 1));
                var change2 = parseInt(Math.random() * (arr.length - 1));
                hold = indexList[change1];
                indexList[change1] = indexList[change2];
                indexList[change2] = hold;
            }
        };
        shuffle();
        for (let i = 0; i < arr.length; i++) {
            result[i].currentIndex = indexList[i];
            if (i == arr.length - 1) {
                result[i].isNull = true;

            }
        }

        return result;
    }

    _getActBox() {
        //找到空白块
        let blackBox = this.state.imgList.find((element) => {
            return element.isNull;
        });

        let c = blackBox.currentIndex;
        //当前在第几行
        let c_r = parseInt(c / 3);
        //当前在第几列
        let c_c = c % 3;

        let findElement = (r, c) => {
            return this.state.imgList.find((element) => {


                return element.currentIndex == (r * 3 + c);
            })
        };

        //正上方
        this.actBox.up = c_r > 0 ? findElement(c_r - 1, c_c) : {};
        this.actBox.down = c_r < 2 ? findElement(c_r + 1, c_c) : {};
        this.actBox.left = c_c > 0 ? findElement(c_r, c_c - 1) : {};
        this.actBox.right = c_c < 2 ? findElement(c_r, c_c + 1) : {};

        console.log("up", this.actBox.up.currentIndex);
        console.log("down", this.actBox.down.currentIndex);
        console.log("left", this.actBox.left.currentIndex);
        console.log("right", this.actBox.right.currentIndex);
    }

    _move(direction) {

        let blackBox = this.state.imgList.find((element) => {
            return element.isNull;
        });

        let changeBoxCurrentIndex = (box1Index, box2Index) => {

            if (box1Index == undefined || box2Index == undefined) {
                return;
            }


            let imgList = this.state.imgList;

            console.log("box1", box1Index);
            console.log("box2", box2Index);
            let box1 = imgList.find((element) => element.currentIndex == box1Index);
            let box2 = imgList.find((element) => element.currentIndex == box2Index);
            let temp = box1.currentIndex;
            box1.currentIndex = box2.currentIndex;
            box2.currentIndex = temp;
            LayoutAnimation.easeInEaseOut();
            this.setState({imgList: imgList}, (() => {
                this._getActBox();
                this._check();
            }).bind(this));


        }


        switch (direction) {
            case "up":
                changeBoxCurrentIndex(this.actBox.down.currentIndex, blackBox.currentIndex);
                break;
            case "down":
                changeBoxCurrentIndex(this.actBox.up.currentIndex, blackBox.currentIndex);
                break;
            case "left":
                changeBoxCurrentIndex(this.actBox.right.currentIndex, blackBox.currentIndex);
                break;
            case "right":
                changeBoxCurrentIndex(this.actBox.left.currentIndex, blackBox.currentIndex);
                break;
        }

    }

    _check() {
        let result = !this.state.imgList.some((item) => {
            return item.index !== item.currentIndex
        });
        console.log(this.state.imgList);
        console.log("check_" + result);
        if (result) {
            Alert.alert(
                '恭喜您',
                '完成了一个拼图！',
                [
                    {text: '重新来一局', onPress: () => this._start()},
                    {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
                ],
                {cancelable: false}
            )

        }
    }


    render() {
        return (
            <View style={styles.container}
                  {...this._panResponder.panHandlers}>
                <View style={{flex: 1}}>

                    {this.state.imgList.map((img, index) => {
                        if (img.isNull) return null;
                        return (
                            <Image style={{
                                width: img.fullWidth,
                                height: img.fullHeight,
                                position: "absolute",

                                top: parseInt(img.currentIndex / 3) * img.fullHeight,
                                left: img.currentIndex % 3 * img.fullWidth,
                                borderWidth: 1,
                                borderColor: "#000000"
                            }} key={index}
                                   source={{uri: img.uri}}/>
                        )
                    })}
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    opView: {},
    canvas: {
        flex: 1
    },


});

