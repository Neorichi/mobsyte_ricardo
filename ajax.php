<?php
//Note: Important
// - Chmod 777 to XML Folder

//File Name
$file = 'xml/demo.xml';

//Get and clean injection post
$json=$_POST['data'];

//Decode json fuction
$decodeJson=json_decode($json);


//SimpleXMLElement fuction with header XML
$xml = new SimpleXMLElement('<xml/>');

//Loop get our data

foreach($decodeJson as $data):
	//Create new item
    $item = $xml->addChild('item');
    //Add child item_id
    $item->addChild('item_id', $data->item_id);
    //Add child parent_id
    $item->addChild('parent_id',$data->parent_id);
    //Add child depth
    $item->addChild('depth', $data->depth);
    //Add child left
	$item->addChild('left', $data->left);
	//Add child right
    $item->addChild('right', $data->right);
    //Add child text (html)
    $item->addChild('html', $data->html);
endforeach;

//Return 1 if all is okey
echo $xml->asXML($file);