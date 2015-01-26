jquery.setClasses.js
====================

指定した連続する要素の、最初と最後の要素に任意のclassを付与する（レガシーブラウザ用）。

##Description
このプラグインは、指定した連続する要素の、最初と最後の要素に任意のclassを付与します。  
first-childやlast-childなどの擬似要素が使用できないレガシーブラウザ向けのプラグインです。

##Usage

1. 対象となる連続する要素を囲む、大枠のブロック要素に初期化の指定をします。class名は任意で結構です。  
1. 子要素に共通のclass名を指定すると（デフォルトは'setTarget'）最初と最後の要素に任意の名前で（デフォルトは最初：'first', 最後：'last'）のclassを付与することが出来ます。

###html

デフォルトで使用する場合は、以下の通り記述してください。

	<div class="targetWrapper">
		<div class="setTarget">
			テキストテキストテキストテキスト
		</div>
		<div class="setTarget">
			テキストテキストテキストテキスト
		</div>
		<div class="setTarget">
			テキストテキストテキストテキスト
		</div>
		<div class="setTarget">
			テキストテキストテキストテキスト
		</div>
	</div>
	
###javascript

デフォルトで使用する場合は、以下の通り記述してください。

    $(function() {
	    $('.targetWrapper').setClasses();
    });

##Options

オプション名  | デフォルト    | 説明
------------- | ------------- | -------------
target        | setTarget     | 対象の連続するブロックに付与するclass
firstClass    | first         | 最初の要素に付与するclass
lastClass    | last          | 最後の要素に付与するclass

###Example

    $(function() {
	    $('.targetWrapper').setClasses({
	    	target : '.yourTargetClass',
	    	firstClass : 'yourFirstClass',
	    	lastClass : 'yourLastClass'
	    });
    });

##Copyright

Copyright (c) 2014 Yuki Sugitani
