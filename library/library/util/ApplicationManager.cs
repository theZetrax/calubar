using System;
using System.Collections;
using System.Collections.Generic;

namespace library.Util {
    public interface ApplicationDefinition {
        public string ApplicationName { get; set; }
        public string ApplicationResourceUrl { get; set; }
        public string ApplicationDescription { get; set; }

        public ApplicationDefinition(string applicationName,
            string applicationResourceUrl, string? applicationDescription)
        {
            this.ApplicationName = applicationName;
            this.ApplicationResourceUrl = applicationResourceUrl;
            if (applicationDescription != null) {
                
            }
        }
    }
    
    public class ApplicationManager
    {
        public List<Object> ApplicationsList { get; private set; }

        public ApplicationManager()
        {
            ApplicationsList = new ArrayList();
        }

        public AddApplication(string applicationName,
            string applicationResourceUrl, string? applicationDescription)
        {

        }
    }
}