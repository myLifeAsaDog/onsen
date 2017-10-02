<?php

  require "api_key";

  $url = 'http://jws.jalan.net/APICommon/AreaSearch/V1/?key='.API_KEY."&l_area=".$_GET['l_area'];

  $xml = simplexml_load_file($url);

  $xml = $xml->Area->Region->Prefecture->LargeArea;

  $result = '{"title":"'.(string)$xml->attributes()->name.'","smallArea": [';

  $count = count($xml->SmallArea);
  $index = 1;
  foreach ($xml->SmallArea as $node){
    $result .= '{"cd":"'.(string)$node->attributes()->cd.'","name":"'.(string)$node->attributes()->name.'"}';

    ++$index;
    if (($index>$count)==false) { $result .= ','; }
  };

  $result .= ']}';

  header("Content-Type: text/json; charset=utf-8");
  echo $result;
  exit();

?>
