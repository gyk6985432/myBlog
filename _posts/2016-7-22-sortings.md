---
layout: post
title: 8种排序法（Java实现）
---

内部排序法有8种：冒泡排序法、选择排序法、插入排序法、合并排序法、快速排序法、堆排序法、希尔排序法和基数排序法。

>排序的稳定性：数据经过排序后，两个相同键值的记录仍然保持原来的次序。


| 排序方法 |  稳定性  |
|:---------:|:--------:|
| 冒泡排序法 | 稳定  |
| 选择排序法 | 不稳定  |
| 插入排序法 | 稳定  |
| 希尔排序法 | 稳定  |
| 归并排序法 | 稳定  |
| 快速排序法 | 不稳定  |
| 堆积排序法 | 不稳定  |
| 基数排序法 | 稳定  |

前四种都是简单的排序，后三种较为复杂。

## 冒泡排序法
冒泡排序法为交换排序法的一种，基本思想是从第一个元素开始，与后面一个的元素比较，若顺序有误则二者交换。然后对下一个位置的元素重复上述过程。这样完成一次扫描后，最后一个元素位置是正确的。继续第二次扫描，确定倒数第二个元素，以此类推。
由于只是对相邻元素进行交换，所以是稳定排序。

复杂度分析：最坏情况需要比较的次数为(n-1)+(n-2)+(n-3)+...+3+2+1=n(n-1)/2，时间复杂度为O(n^2)。最好情况为n-1次比较，时间复杂度为O(n)。只需要一个额外空间，空间复杂度为O(1)。
适用于数据量小或部分数据已经排过序的情况。


```
//冒泡排序法(Bubble Sort)

public class BubbleSorting {
    public static void main(String[] args){
        int i,j,tmp;
        int data[] = {6,5,9,7,2,8};  //原始数据

        System.out.println("冒泡排序法：");
        System.out.print("原始数据为：");
        for(i=0;i<6;i++){
            System.out.print(data[i]+" ");
        }
        System.out.println();

        for(i=5;i>0;i--){   //扫描次数
            for(j=0;j<i;j++){   //比较、交换次数
                if(data[j]>data[j+1]){
                    tmp = data[j];
                    data[j] = data[j+1];
                    data[j+1] = tmp;
                }
            }

            //打印各次扫描结果
            for(j=0;j<6;j++){
                System.out.print(data[j]+" ");
            }
            System.out.println();
        }

        System.out.println("排序结果为：");
        for(i=0;i<6;i++){
                System.out.print(data[i]+" ");
        }
    System.out.println();
    }
}
```

## 选择排序法
对于由小到大排序的情况，进行第一次扫描，从第一个位置开始，在其后依次寻找比它小的元素，从而将最小的元素放在第一个位置。第二次扫描，从第二个位置开始，重复上面的过程。
由于排序时要直接和最前面的元素交换，因此有可能会使原来的次序改变，所以它是不稳定的排序法。

复杂度分析：每一次扫描过程中都要找到最小元素，然后进行交换，因此比较的次数总是(n-1)+(n-2)+(n-3)+...+3+2+1=n(n-1)/2，时间复杂度为O(n^2)。
此方法适用于数据量小或部分数据已经排过序的情况。

```
//选择排序法
public class SelectionSorting{

    int data[] = new int[]{9,7,5,3,4,6};
    public static void main(String[] args){
        System.out.print("原始数据为：");
        SelectionSorting test = new SelectionSorting();
        test.showData();
        test.select();
    }

    public void showData(){
        int i;
        for (i=0;i<6;i++) {
            System.out.print(data[i]+" ");
        }
        System.out.println();
    }

    public void select(){
        int i,j,temp;
        for (i=0;i<5;i++) {
            for (j=i+1;j<6;j++) {
                if (data[i]>data[j]) {
                    temp=data[i];
                    data[i]=data[j];
                    data[j]=temp;
                }
            }
            System.out.print("第"+(i+1)+"次排序：");
            for (j=0;j<6;j++) {
                System.out.print(data[j]+" ");
            }
            System.out.println();
        }
        System.out.println();
    }
}
```

## 插入排序法
第一次扫描时，从第二个元素开始，与已经排好序的每个元素比较，将其插入到合适的位置。第二次扫描从第三个元素开始，重复上述过程。
由于将某一个元素插入到合适位置的过程中，元素是逐个依次往后移动，所以是稳定排序。

复杂性分析：最坏情况需要比较的次数为(n-1)+(n-2)+(n-3)+...+3+2+1=n(n-1)/2，时间复杂度为O(n^2)。最好情况为O(n)。
插入排序法适用于大部分已经排过序，或已排序的数据中新增数据后进行排序的情况。
插入排序中会有大量的数据移动，因此最好在链表上操作。

```
//插入排序法

import java.io.*;

public class InsertSorting{
    int data[] = new int[6];
    int size = 6;

    public static void main(String[] args) {
        InsertSorting test = new InsertSorting();
        test.inputarr();
        System.out.print("您输入的原始数据为： ");
        test.showData();
        test.insert();
    }

    public void inputarr(){
        int i;
        for (i=0;i<size;i++) {
            System.out.print("请输入第"+(i+1)+"个元素");
            try{
                InputStreamReader isr = new InputStreamReader(System.in);
                BufferedReader br = new BufferedReader(isr);
                data[i]=Integer.parseInt(br.readLine());
            }catch(Exception e){
                System.out.println("输入有误！");
            }
        }
    }

    public void showData(){
        int i;
        for (i=0;i<size;i++) {
            System.out.print(data[i]+" ");
        }
        System.out.println();
    }

    public void insert(){
        int i,j,temp;
        for (i=1;i<size;i++) {
            temp = data[i];
            j=i-1;
            while(j>=0 && temp<data[j]){
                data[j+1]=data[j];
                j--;
            }
            data[j+1]=temp;
            System.out.print("第"+i+"次扫描：");
            showData();
        }
    }
}
```

## 希尔排序法
希尔排序法是D.L.Shell 于1959年7月发明的一种排序方法。