namespace coffeetea.Data{
    public class CoffeeService : ICoffeeService
    {
        public Coffee GetCoffeeData() => Data.coffee;
    }
}
