<?php
spl_autoload_register(function ($class_name) {
    include 'Classes/'.$class_name . '.php';
});
$arr = [
    ['name'=>'Test01',  'sort-order'=>5],
    ['name'=>'Test02',  'sort-order'=>4],
    ['name'=>'Test03',  'sort-order'=>3],
    ['name'=>'Test04',  'sort-order'=>2],
    ['name'=>'Test05',  'sort-order'=>1]
];

$obj  = new MyClass();
echo "<pre>";
print_r($obj->sortProduct($arr, 'sort-order'));