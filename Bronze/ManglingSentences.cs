using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManglingSentences
{
    class ManglingSentences
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Mangling Sentences - Daily Programmer Challenge 220 - Bronze");
            Console.WriteLine("Brad Walker");
            Console.WriteLine("June 30th - 2015\n");
            MangleString("This challenge doesn't! seem so hard.");
            MangleString("There are more things between heaven and earth, Horatio, than are dreamt of in your philosophy.");
            MangleString("Eye of Newt, and Toe of Frog, Wool of Bat, and Tongue of Dog.");
            MangleString("Adder's fork, and Blind-worm's sting, Lizard's leg, and Howlet's wing.");
            MangleString("For a charm of powerful trouble, like a hell-broth boil and bubble.");

            Console.Read();
        }

        public static void MangleString(String phrase)
        {
            Array phrspl = phrase.Split(' ');

            String phrBuild = "";

            foreach (string w in phrspl)
            {
                phrBuild += (MangleStringBuild(w) + " ");
            }

            Console.WriteLine("Input:");
            Console.WriteLine(phrase);
            Console.WriteLine("Output:");
            Console.WriteLine(phrBuild+"\n");
        }

        private static String MangleStringBuild(String word)
        {
            char[] charArray = word.ToLower().ToCharArray();

            Array.Sort(charArray);

            String comp = new String(charArray);

            while (Char.IsLetterOrDigit(comp[0]) == false) // remove all non-numerical numbers shunted to front of array during sort
                comp = comp.Remove(0, 1);

            if (Char.IsUpper(word, 0)) // Capitalize first character
                comp = Char.ToUpper(comp[0]) + comp.Remove(0, 1);

            foreach(Char c in word)
            {
                if(!Char.IsLetter(c))
                {
                    comp = comp.Insert(word.IndexOf(c), c+"");
                }
            }

            return comp;
        }
    }
}
