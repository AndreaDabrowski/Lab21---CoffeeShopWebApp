﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace CoffeeShop.Models
{
    public class UserInput
    {
        [Required] // attributes 
        [RegularExpression(@"^[a-zA-Z]{2,}$")]
        public string FirstName { set; get; }

        [Required]
        [RegularExpression(@"^[a-zA-Z]{2,}$")]
        public string LastName { set; get; }

        [Required]
        [RegularExpression(@"^[A-z0-9]{5,30}@+[a-z0-9]{5,10}.+[a-z0-9]{2,3}$")]
        public string Email { set; get; }

        [Required]
        [RegularExpression(@"^[A-z0-9]{2,}$")]
        public string Password { set; get; }

        [Required]
        [RegularExpression(@"^[A-z0-9]{2,}$")]
        public string PasswordConfirm { set; get; }

        [Required]
        [RegularExpression(@"^[0-9]{10}$")]
        public string PhoneNumber { set; get; }

        [Required]
        //[RegularExpression(@"^(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/](19|20)\d\d$")]
        public string BirthDate { set; get; }

        public UserInput()
        {
            FirstName = "";
            LastName = "";
            Email = "";
            PhoneNumber = "";
            Password = "";
            BirthDate = "";
            PasswordConfirm = "";
        }
        public UserInput(string fn, string ln, string em, string pn, string pw, string pwc, string bd)
        {
            FirstName = fn;
            LastName = ln;
            Email = em;
            PhoneNumber = pn;
            Password = pw;
            BirthDate = bd;
            PasswordConfirm = pwc;
        }


    }
}