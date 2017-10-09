<?php

  require "api_key";

  $url = "http://jws.jalan.net/APIAdvance/HotelSearch/V1/?key=".API_KEY."&pub_bath=1&pict_size=5&count=50&start=".$_GET['start']."&xml_ptn=1&s_area=".$_GET['s_area'];

  $xml = simplexml_load_file($url);

  $result = '{"results":"'.(string)$xml->NumberOfResults.'","DisplayPerPage":"'.(string)$xml->DisplayPerPage.'","DisplayFrom":"'.(string)$xml->DisplayFrom.'","Hotel": [';

  $count = count($xml->Hotel);
  $index = 1;
  foreach ($xml->Hotel as $node){
    $result .= '{';
    $result .= '"HotelID":"'.(string)$node->HotelID.'",';
    $result .= '"HotelName":"'.(string)$node->HotelName.'",';
    $result .= '"PictureURL":"'.(string)$node->PictureURL.'",';
    $result .= '"HotelCaption":"'.str_replace(['<BR>','"'],['','&quot;'],(string)$node->HotelCaption).'",';
    $result .= '"HotelDetailURL":"'.(string)$node->HotelDetailURL.'",';
    $result .= '"SampleRateFrom":"'.(string)$node->SampleRateFrom.'",';
    $result .= '"Rating":"'.(string)$node->Rating.'"';
    $result .= '}';

    ++$index;
    if (($index>$count)==false) { $result .= ','; }
  };

  $result .= ']}';

  header("Content-Type: text/json; charset=utf-8");
  echo $result;
  exit();

?>
