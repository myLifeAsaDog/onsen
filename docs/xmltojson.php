<?php

$api_key = 'aqr14c0bb40362';

if (isset($_GET['pref'])) {
  $url = "http://jws.jalan.net/APICommon/AreaSearch/V1/?key=".$api_key."&pref=".$_GET['pref'];
} elseif (isset($_GET['l_area'])) {
  $url = "http://jws.jalan.net/APICommon/AreaSearch/V1/?key=".$api_key."&l_area=".$_GET['l_area'];
} elseif (isset($_GET['s_area'])) {
  $url = "http://jws.jalan.net/APILite/HotelSearch/V1/?key=".$api_key."&onsen=1&s_area=".$_GET['s_area'];
} elseif (isset($_GET['h_id'])) {
  $url = "http://jws.jalan.net/APILite/HotelSearch/V1/?key=".$api_key."&h_id=".$_GET['h_id'];  
}

$xml = simplexml_load_file($url);
$json = json_encode($xml);

header("Content-Type: text/javascript; charset=utf-8");
echo $json;
exit();

?>
