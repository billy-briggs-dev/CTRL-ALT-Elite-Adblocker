import sys, re, json

"""
This funciton only get domain in the following format
eg. 
google.com
google.com^
google.com^$third-party

"""
def filter(filterList):
    reg3 = "^\|\|[a-zA-Z0-9./]+?\^\$third-party*$" #third party pattern
    reg1 = "^\|\|[a-zA-Z0-9./]+?\.(net|com)\^*$" #simple domain
    pre = "*://*."
    lines = filterList.read().splitlines()
    domains = []
    for line in lines:
        y = re.search(reg3, line)#third party pattern 
        if y:
            domain = y.group()[2:]
            temp = re.search("[a-zA-Z0-9./]+?\^", domain)
            if temp:
                domain = temp.group()[:-1]
                domain = pre + domain + "/*"
                domains.append(domain)
        else: #simple domain 
            x = re.search(reg1, line)
            if x:
                domain = x.group()[2:]
                while(domain[len(domain) - 1] == '^'):
                    domain = domain[:-1]
                    if(len(domain) < 2):
                        break
                domain = pre + domain + "/*"
                domains.append(domain)

    with open("domains.js", "w") as js_file:#save to js file
        js_file.write("var blocked_domains = %s;" % json.dumps(domains))
    
"""
usage : python3 filter_domain.py filterlist.txt
create domains.js file

"""


def main(argv):
    file = open(argv[1], "r")
    filter(file)



if __name__ == "__main__":
    main(sys.argv)