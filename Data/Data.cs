using System;

using System.Collections.Generic;
namespace coffeetea.Data{
    public static class Data{
        public static Tea tea = new Tea(){
            title="How to make Tea",
            // stepsToMakeTea=["Boil some water","Steep the water in the tea","Pour tea in the cup","Add lemon"]
            // stepsToMakeTea=new string[1]{""}
            stepsToMakeTea = new List<string>(){"Boil some water","Steep the water in the tea","Pour tea in the cup","Add lemon"}
        };

        public static Coffee coffee = new Coffee(){
            title="How to make Coffee",
            stepsToMakeCoffee = new List<string>(){"Boil some water","Brew the coffee grounds","Pour coffee in the cup","Add sugar and milk"}
        };

        public static Chocolate chocolate = new Chocolate(){
            title="How to make Chocolate",
            stepsToMakeChocolate = new List<string>(){"Boil some water","Add drinking chocolate powder to the water","Pour chocolate in the cup"}
        };

    }
}