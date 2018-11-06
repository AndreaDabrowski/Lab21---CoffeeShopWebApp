using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace CoffeeShop.Models
{
    public class UserInput
    {
        [Required] // attributes 
        [RegularExpression("^[a-zA-Z]{2,}$")]
        public string FirstName { set; get; }

        [Required]
        [RegularExpression("^[a-zA-Z]{2,}$")]
        public string LastName { set; get; }

        [Required]
        [RegularExpression("^[a-zA-Z]{2,}$")]
        public string Email { set; get; }

        [Required]
        [RegularExpression("^[a-zA-Z]{2,}$")]
        public string Password { set; get; }

        [Required]
        [RegularExpression("^[0-9]{10,}$")]//change this
        public string PhoneNumber { set; get; }

        [Required]
        [RegularExpression("^[a-zA-Z]{2,}$")]
        public string BirthDate { set; get; }

        public UserInput()
        {
            FirstName = "";
            LastName = "";
            Email = "";
            PhoneNumber = 0;
            Password = "";
        }
        public UserInput(string fn, string ln, string em, int pn, string pw)
        {
            FirstName = fn;
            LastName = ln;
            Email = em;
            PhoneNumber = pn;
            Password = pw;
        }

    }
}