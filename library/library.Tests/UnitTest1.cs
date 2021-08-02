using System;
using Xunit;

namespace library.Tests
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            bool trueValue = true;

            Assert.True(trueValue, "This should be a truthy value");
        }
    }
}
