using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using System.Text.RegularExpressions;

namespace API.ViewModel
{
    public class CategoryVm
    {

        public List<Categories> CategoryItems { get; set; }

        public string RemoveSpecialCharacters(string str)
        {
            return Regex.Replace(str, "[^a-zA-Z0-9_.]+", "", RegexOptions.Compiled);
        }


    }

    public class Categories
    {
        public string Name { get; set; }
    }
}
