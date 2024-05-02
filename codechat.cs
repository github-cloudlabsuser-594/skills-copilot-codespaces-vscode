using System;
using System.Linq;

class Program
{
    const int MAX = 100;

    static void Main()
    {
        int n = ReadInteger("Enter the number of elements (1-100): ", 1, MAX);

        int[] arr = new int[n];

        Console.WriteLine($"Enter {n} integers:");
        for (int i = 0; i < n; i++)
        {
            arr[i] = ReadInteger($"Enter integer {i+1}: ");
        }

        int total = arr.Sum();

        Console.WriteLine($"Sum of the numbers: {total}");
    }

    static int ReadInteger(string prompt, int min = int.MinValue, int max = int.MaxValue)
    {
        int value;
        do
        {
            Console.Write(prompt);
        } while (!int.TryParse(Console.ReadLine(), out value) || value < min || value > max);

        return value;
    }
}