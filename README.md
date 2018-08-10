# Guess the Number 終極密碼

![home](https://i.imgur.com/Msn9vSG.png)

## Demo

https://vii120.github.io/guess-the-number/

## Intro

使用JavaScript製作的猜數字遊戲，數字範圍介於1-100

有基本的偵錯功能

* 不可輸入空白值
* 只能輸入數字
* 需為整數，不可包含小數
* 不可超出範圍(1-100)

過程中會顯示已猜測次數，並給予小提示(太高或太低)

當猜測數字與實際數字非常接近 *(差距<=10)* 時，提示內容會有點不同


![guessing](https://i.imgur.com/jWARjyR.png)

### 鍵盤功能

除了點擊按鈕以外，也可以使用鍵盤來控制功能

* enter：提交猜測數字
* ↑：猜測數字+1
* ↓：猜測數字-1

### 再玩一次

猜對數字後，會出現"guess again"(再玩一次)按鈕

點選後會有新的隨機數字，猜測次數也會歸零並重新計算

![bingo](https://i.imgur.com/xIGX4cp.png)

## CSS preprocessor

使用**SASS**撰寫
