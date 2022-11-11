<?php

	$executionStartTime = microtime(true) / 1000;

	$url='http://api.geonames.org/searchJSON?formatted=true&q=' . $_REQUEST['q'] . '&maxRows=1' . '&lang=' . $_REQUEST['lang'] .  '&username=venkysatya&style=medium';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	$result=curl_exec($ch);

	curl_close($ch);

	$decode = json_decode($result,true);




	$output['data'] = $decode['geonames'];

	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output);


?>
