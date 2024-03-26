using System;

namespace MyCsharpLoop
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("For Loop Example:");

            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine($"Current coult: {i}");
            }

            Console.WriteLine("Loop finished");
        }
    }
}