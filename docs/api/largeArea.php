<?php

  require "api_key";

  $url = 'http://jws.jalan.net/APICommon/AreaSearch/V1/?key='.API_KEY.'&pref='.$_GET['pref'];

  $xml = simplexml_load_file($url);

  $xml = $xml->Area->Region->Prefecture;

  $result = '{"title":"'.(string)$xml->attributes()->name.'","largeArea": [';

  $count = count($xml->LargeArea);
  $index = 1;
  foreach ($xml->LargeArea as $node){
    $result .= '{"cd":"'.(string)$node->attributes()->cd.'","name":"'.(string)$node->attributes()->name.'"}';

    ++$index;
    if (($index>$count)==false) { $result .= ','; }
  };

  $result .= ']}';
  
  header('Content-Length:' . strlen($result));
  header("Content-Type: text/json; charset=utf-8");
  echo $result;
  exit();

?>
