/* 
 * The Button - Daily Programmer Challenge 209 - Bronze
 * Author: Brad Walker
 * Date: July 2nd, 2015
 */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TheButton
{
    class TheButton
    {
        static void Main()
        {
            Console.WriteLine("The Button - Daily Programmer Challenge 209 - Bronze");
            Console.WriteLine("Brad Walker");
            Console.WriteLine("July 2nd, 2015\n");

            List<User> users1 = Initialize1();

            Dump(users1);

            List<User> users2 = Initialize2();

            Dump(users2);

            Console.ReadLine();
        }

        public class User // User Class
        {
            private String _name;
            private Double _time;

            public User(String n, Double t) { _name = n; _time = t; }

            public void setName(String v) { _name = v; }
            public String getName() { return _name; }

            public void setTime(Double v) { _time = v; }
            public Double getTime() { return _time; }

            public Double getButtonTime() { return Math.Floor(60.00 - _time); }
        }

        static List<User> Initialize1() // Initializing Data
        {
            List<User> users = new List<User>{};

            users.Add(new User("Coder_d00d", 3.14));
            users.Add(new User("Cosmologicon", 22.15));
            users.Add(new User("Elite6809", 17.25));
            users.Add(new User("jnazario", 33.81));
            users.Add(new User("nint22", 10.13));
            users.Add(new User("rya11111", 36.29));
            users.Add(new User("professorlamp", 31.60));
            users.Add(new User("XenophonOfAthens", 28.74));

            return users;
        }

        static List<User> Initialize2()
        {
            List<User> users = new List<User> { };

            users.Add(new User("bholzer", 101.09));
            users.Add(new User("Cosmologicon", 27.45));
            users.Add(new User("nint22", 13.76));
            users.Add(new User("nooodl", 7.29));
            users.Add(new User("nottoobadguy", 74.56));
            users.Add(new User("oskar_s", 39.90));
            users.Add(new User("Steve132", 61.82));

            return users;
        }

        static void Dump(List<User> users)
        {

            Console.WriteLine("INPUT:");

            foreach (User u in users)
            {
                Console.WriteLine(String.Format("{0,17} {1,7}", u.getName(), u.getTime()));
            }

            Console.WriteLine("OUTPUT:");

            List<User> ousers = users.OrderBy(User => User.getButtonTime()).ToList(); // Order list by button time

            ousers.Reverse();

            Double reset = 0.00; // tracks the difference in time between all user button clicks
            foreach (User u in ousers)
            {
                u.setTime(u.getTime() - reset);
                reset += u.getTime();

                Console.WriteLine(String.Format("{0,17} {1,7}", u.getName(), u.getTime()));
            }
        }
    }
}
