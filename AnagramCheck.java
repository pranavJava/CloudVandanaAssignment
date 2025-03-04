import java.io.*;
import java.util.Scanner;
import java.util.Arrays;
public class AnagramCheck{
    public static boolean checkAnagram(String str1,String str2){
  
char[] s1=new char[str1.length()];
char[] s2=new char[str2.length()];
for(int i = 0, j = 0; i < str1.length() && j < str2.length(); i++, j++){
  s1[i]=str1.charAt(i);
  s2[j]=str2.charAt(j);
}
   Arrays.sort(s1);
  Arrays.sort(s2);
        return Arrays.equals(s1, s2);
    }
    public static void main(String[] args){
        String string1,string2;
        Scanner sc=new Scanner(System.in);
 System.out.println("Enter First String : ");
 string1=sc.nextLine();
   System.out.println("Enter Second String : ");
   string2=sc.nextLine();
   System.out.println("Is string is Anagram? "+checkAnagram(string1,string2));
    }
}