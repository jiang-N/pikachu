const string = `/*
**大家好
**今天给大家变个魔术
*/
.skin {
    position: relative;
    background: #ffe600;
    height: 50vh;
}

/*
**首先
**我来组成鼻子
*/
.nose {
    border: 10px solid #000;
    border-color: #000 transparent transparent;
    border-bottom: none;
    width: 0;
    height: 0;
    position: relative;
    top: 135px;
    left: 50%;
    margin-left: -10px;
}

.yuan {
    position: absolute;
    top: -16px;
    left: -10px;
    border-top-left-radius: 10px 5px;
    border-top-right-radius: 10px 5px;
    width: 20px;
    height: 6px;
    background: #000;
}

/*
**我来组成眼睛
*/
.eye {
    width: 64px;
    height: 64px;
    border: 3px solid #000;
    border-radius: 50%;
    position: absolute;
    top: 90px;
    left: 50%;
    margin-left: -32px;
    background: #2e2e2e;
}

/*
**我来组成眼珠子
*/
.eye::before {
    content: "";
    display: block;
    width: 32px;
    height: 32px;
    border: 3px solid #000;
    border-radius: 50%;
    background: #fff;
    position: relative;
    top: -1px;
    left: 6px;
}

/*
**把我放左边
*/
.eye.left {
    transform: translateX(120px);
}

/*
**把我放右边
*/
.eye.right {
    transform: translateX(-120px);
}

/*
**我来组成嘴巴
*/
.mouth {
    width: 170px;
    height: 170px;
    position: absolute;
    top: 170px;
    left: 50%;
    margin-left: -85px;
}

.mouth .up {
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
}

/*
**我是嘴唇
*/
.mouth .up .lip {
    width: 82px;
    height: 30px;
    border: 3px solid #000;
    position: absolute;
    top: -10px;
    left: 50%;
    margin-left: -41px;
    background: #ffe600;
}

/*
**我是左嘴唇
*/
.mouth .up .lip.left {
    border-bottom-left-radius: 60px 30px;
    border-top: none;
    border-right: none;
    transform: translateX(-42px) rotate(-25deg);
}

/*
**我是右嘴唇
*/
.mouth .up .lip.right {
    border-bottom-right-radius: 60px 30px;
    border-top: none;
    border-left: none;
    transform: translateX(42px) rotate(25deg);
}

.mouth .down {
    width: 100%;
    height: 170px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid #000;
    width: 170px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -85px;
    border-bottom-left-radius: 100px 500px;
    border-bottom-right-radius: 100px 500px;
    background: #9b000a;
    overflow: hidden;
}

/*
**我来组成小舌头
*/
.mouth .down .yuan1 .yuan2 {
    width: 100%;
    height: 135px;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    background: #ff485f;
}

/*
**我来组成腮帮子
*/
.face {
    width: 88px;
    height: 88px;
    position: absolute;
    top: 210px;
    left: 50%;
    margin-left: -44px;
    border: 3px solid #000;
    border-radius: 50%;
    background: #f00;
}

.face.left {
    transform: translateX(-170px);
}

.face.right {
    transform: translateX(170px);
}

/*
**我黄皮耗子不请自来!
*/
`
export default string