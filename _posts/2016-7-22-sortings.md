---
layout: post
title: 8�����򷨣�Javaʵ�֣�
---

�ڲ�������8�֣�ð�����򷨡�ѡ�����򷨡��������򷨡��ϲ����򷨡��������򷨡������򷨡�ϣ�����򷨺ͻ������򷨡�

>������ȶ��ԣ����ݾ��������������ͬ��ֵ�ļ�¼��Ȼ����ԭ���Ĵ���


| ���򷽷� |  �ȶ���  |
|:---------:|:--------:|
| ð������ | �ȶ�  |
| ѡ������ | ���ȶ�  |
| �������� | �ȶ�  |
| ϣ������ | ���ȶ�  |
| �鲢���� | �ȶ�  |
| �������� | ���ȶ�  |
| �ѻ����� | ���ȶ�  |
| �������� | �ȶ�  |

ǰ���ֶ��Ǽ򵥵����򣬺����ֽ�Ϊ���ӡ�

## ð������
ð������Ϊ�������򷨵�һ�֣�����˼���Ǵӵ�һ��Ԫ�ؿ�ʼ�������һ����Ԫ�رȽϣ���˳����������߽�����Ȼ�����һ��λ�õ�Ԫ���ظ��������̡��������һ��ɨ������һ��Ԫ��λ������ȷ�ġ������ڶ���ɨ�裬ȷ�������ڶ���Ԫ�أ��Դ����ơ�
����ֻ�Ƕ�����Ԫ�ؽ��н������������ȶ�����

���Ӷȷ�����������Ҫ�ȽϵĴ���Ϊ(n-1)+(n-2)+(n-3)+...+3+2+1=n(n-1)/2��ʱ�临�Ӷ�ΪO(n^2)��������Ϊn-1�αȽϣ�ʱ�临�Ӷ�ΪO(n)��ֻ��Ҫһ������ռ䣬�ռ临�Ӷ�ΪO(1)��
������������С�򲿷������Ѿ��Ź���������


```
//ð������(Bubble Sort)

public class BubbleSorting {
    public static void main(String[] args){
        int i,j,tmp;
        int data[] = {6,5,9,7,2,8};  //ԭʼ����

        System.out.println("ð�����򷨣�");
        System.out.print("ԭʼ����Ϊ��");
        for(i=0;i<6;i++){
            System.out.print(data[i]+" ");
        }
        System.out.println();

        for(i=5;i>0;i--){   //ɨ�����
            for(j=0;j<i;j++){   //�Ƚϡ���������
                if(data[j]>data[j+1]){
                    tmp = data[j];
                    data[j] = data[j+1];
                    data[j+1] = tmp;
                }
            }

            //��ӡ����ɨ����
            for(j=0;j<6;j++){
                System.out.print(data[j]+" ");
            }
            System.out.println();
        }

        System.out.println("������Ϊ��");
        for(i=0;i<6;i++){
                System.out.print(data[i]+" ");
        }
    System.out.println();
    }
}
```

## ѡ������
������С�����������������е�һ��ɨ�裬�ӵ�һ��λ�ÿ�ʼ�����������Ѱ�ұ���С��Ԫ�أ��Ӷ�����С��Ԫ�ط��ڵ�һ��λ�á��ڶ���ɨ�裬�ӵڶ���λ�ÿ�ʼ���ظ�����Ĺ��̡�
��������ʱҪֱ�Ӻ���ǰ���Ԫ�ؽ���������п��ܻ�ʹԭ���Ĵ���ı䣬�������ǲ��ȶ������򷨡�

���Ӷȷ�����ÿһ��ɨ������ж�Ҫ�ҵ���СԪ�أ�Ȼ����н�������˱ȽϵĴ�������(n-1)+(n-2)+(n-3)+...+3+2+1=n(n-1)/2��ʱ�临�Ӷ�ΪO(n^2)��
�˷���������������С�򲿷������Ѿ��Ź���������

```
//ѡ������
public class SelectionSorting{

    int data[] = new int[]{9,7,5,3,4,6};
    public static void main(String[] args){
        System.out.print("ԭʼ����Ϊ��");
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
            System.out.print("��"+(i+1)+"������");
            for (j=0;j<6;j++) {
                System.out.print(data[j]+" ");
            }
            System.out.println();
        }
        System.out.println();
    }
}
```

## ��������
��һ��ɨ��ʱ���ӵڶ���Ԫ�ؿ�ʼ�����Ѿ��ź����ÿ��Ԫ�رȽϣ�������뵽���ʵ�λ�á��ڶ���ɨ��ӵ�����Ԫ�ؿ�ʼ���ظ��������̡�
���ڽ�ĳһ��Ԫ�ز��뵽����λ�õĹ����У�Ԫ����������������ƶ����������ȶ�����

�����Է�����������Ҫ�ȽϵĴ���Ϊ(n-1)+(n-2)+(n-3)+...+3+2+1=n(n-1)/2��ʱ�临�Ӷ�ΪO(n^2)��������ΪO(n)��
�������������ڴ󲿷��Ѿ��Ź��򣬻���������������������ݺ��������������
���������л��д����������ƶ����������������ϲ�����

```
//��������

import java.io.*;

public class InsertSorting{
    int data[] = new int[6];
    int size = 6;

    public static void main(String[] args) {
        InsertSorting test = new InsertSorting();
        test.inputarr();
        System.out.print("�������ԭʼ����Ϊ�� ");
        test.showData();
        test.insert();
    }

    public void inputarr(){
        int i;
        for (i=0;i<size;i++) {
            System.out.print("�������"+(i+1)+"��Ԫ��");
            try{
                InputStreamReader isr = new InputStreamReader(System.in);
                BufferedReader br = new BufferedReader(isr);
                data[i]=Integer.parseInt(br.readLine());
            }catch(Exception e){
                System.out.println("��������");
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
            System.out.print("��"+i+"��ɨ�裺");
            showData();
        }
    }
}
```

## ϣ������
ϣ��������D.L.Shell ��1959��7�·�����һ�����򷽷�������Ļ���˼���ǽ����ݷ�Ϊһ������������飬���ò������򷨶�����Ԫ��������𽥼�С������ظ��������̡�
��Ȼ������������õ��ǲ������򷨣�����ͬ�ķ�������������ͬԪ�أ������к�ϲ��Ϳ���ʹԭ������ı䣬���ϣ�������ǲ��ȶ�����

���Ӷȷ�����ʱ�临�Ӷ�������ѡ��ͬ����ͬ��ϣ��������ʱ�临�Ӷ�ΪO(n^2)����Hibbard������ʱ�临�Ӷ�ΪO(n^1.5)���ռ临�Ӷ�ΪO(1)�������ᳫ�����κ��������ڿ�ʼʱ��������ϣ����������ʵ��ʹ����֤���������죬�ٸĳɿ��������������߼��������㷨��ϣ�������ֱ�Ӳ���������ԭ�򣺵�nֵ�ܴ�ʱ������ÿһ��������Ҫ�ĸ������٣���������ľ���ܳ�����nֵ��Сʱÿһ����Ҫ�ƶ����������࣬��ʱ�Ѿ��ӽ�����������������λ�á���������������Ľ�ϲ�ʹϣ������Ч�ʱȲ�������ߺܶࡣ

```
//ϣ������

import java.io.*;

public class ShellSorting{
    int data[] = new int[8];
    int size = 8;

    public static void main(String[] args) {
        ShellSorting test = new ShellSorting();
        test.inputarr();
        System.out.println("�������ԭʼ����Ϊ��");
        test.showData();
        test.shell();   
    }

    public void inputarr(){
        int i = 0;
        for (i=0;i<size;i++) {
            System.out.print("�������"+(i+1)+"��Ԫ�أ�");
            try{
                InputStreamReader isr = new InputStreamReader(System.in);
                BufferedReader br = new BufferedReader(isr);
                data[i]=Integer.parseInt(br.readLine());
            }catch(Exception e){
                System.out.println("��������");
            }
        }
    }

    public void showData(){
        for (int i=0;i<size;i++) {
            System.out.print(data[i]+" ");
        }
        System.out.println();
    }

    public void shell(){
        int i,j,temp,jmp,k;
        k=1;
        jmp = size/2;
        while(jmp>0){
            for (i=jmp;i<size;i++) {
                temp = data[i];
                j=i-jmp;
                while(j>=0 && data[j]>temp){
                    data[j+jmp] = data[j];
                    j = j-jmp;
                }
                data[j+jmp] = temp;
            }
            System.out.print("��"+(k++)+"������");
            showData();
            jmp = jmp/2;
        }
    }
}
```
