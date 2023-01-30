# ReDoS example
  - Inspired by [this snyk article](https://learn.snyk.io/lessons/redos/javascript/)

# Definition

ReDoS stands for Regular Expression Denial of Service.
It is a type of attack that occurs when a malicious user exploits the design of a regular expression (regex) to cause an unexpected and prolonged execution time.
# Some examples
  - GitHub Outage: 
  In 2018, GitHub suffered a massive ReDoS attack that brought down its platform for several hours. This attack was caused by a misconfigured regex used by GitHub's load balancer, which caused a spike in CPU usage and led to the platform's outage.

  - Airbnb Outage: 
  In 2017, Airbnb suffered an outage due to a ReDoS attack on its infrastructure. This attack was caused by a malicious actor who exploited a regex in Airbnb's web application to generate a massive amount of traffic, which overwhelmed the company's servers.

  - Cloudflare Outage: 
  In 2019, Cloudflare, a major provider of web security and content delivery services, suffered a worldwide outage due to a ReDoS attack on one of its servers. The attack was caused by a malicious actor who exploited a regex in Cloudflare's code to generate a large amount of traffic, which overwhelmed the company's servers and caused widespread disruptions.

# Why it matters
  If the application uses a regex that is vulnerable to ReDoS, the processing of that request can take an unexpected and prolonged amount of time, which can cause the event loop to become blocked.
  So, this blocks the event loop from processing other requests, potentially leading to a denial of service, as the application becomes unresponsive or too slow to be usable.


# How to identify commons pattern
Here are some signs that may indicate an evil regex pattern:

- Inefficient or highly nested quantifiers.
- Using unescaped special characters.
- Overly long or complex expressions.

# Resources
  - https://owasp.org/www-community/OWASP_Validation_Regex_Repository
  - https://youtu.be/scW9rlEM2p0