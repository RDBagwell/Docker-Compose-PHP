<?php

    class MyClass
    {
        
        private function mergeSort($array, $sortBy)
        {
            if(count($array) <= 1){return $array;}
            $mid = floor(count($array)/2);
            $left =  $this->mergeSort(array_slice($array,0,$mid), $sortBy);
            $right =   $this->mergeSort(array_slice($array,$mid), $sortBy);
            return  $this->merge($left, $right, $sortBy);
        }
        
        private function merge($left, $right, $sortBy)
        {
            $res = array();
        
            while (count($left) && count($right) > 0){
                if($left[0][$sortBy] < $right[0][$sortBy])
                {
                    $res[] = $left[0];
                    $left = array_slice($left , 1);
                }
                else
                {
                    $res[] = $right[0];
                    $right = array_slice($right, 1);
                }
            }
            while (count($left) > 0)
            {
                $res[] = $left[0];
                $left = array_slice($left, 1);
            }
            while (count($right) > 0)
            {
                $res[] = $right[0];
                $right = array_slice($right, 1);
            }
            return $res;
        }

        public function sortProduct($arr, $sortBy = 'sort-order' ){
            return $this->mergeSort($arr, $sortBy);
        }

    }
?>