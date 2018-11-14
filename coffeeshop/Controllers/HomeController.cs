using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CoffeeShop.Models;

namespace CoffeeShop.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            CoffeeShopDBEntities ORM2 = new CoffeeShopDBEntities();
            ViewBag.SendDB = ORM2.Items.ToList<Item>();

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Register()
        {
            ViewBag.Message = "Your registration page.";

            return View();
        }
        public ActionResult AddNewUser(User newUser)
        {
            CoffeeShopDBEntities ORM = new CoffeeShopDBEntities();
            ORM.Users.Add(newUser);//items references which table you want
            ORM.SaveChanges();
            ViewBag.SendDB = ORM.Items.ToList<Item>();
            ViewBag.AddedUser = "User was successfully added";
            return View("Index");
        }

    }
}
        /*public ActionResult AddUser(UserInput newUser)
        {
            // ToDo: validation!!!!!!

            if (ModelState.IsValid)
            {
                // ToDo: Send the data to the DB

                // confirmation, or maybe send to the Index page

                //ViewData["ConfMessage"] = "Thanks " + newUser.FirstName;

                ViewBag.ConfMessage = "You're in, " + newUser.FirstName + "!";

                return View("Summary");
            }

            else
            {
                return View("Error");
            }
        }*/