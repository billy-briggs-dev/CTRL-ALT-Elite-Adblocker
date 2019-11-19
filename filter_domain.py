import sys, re, json

def filter(filterList):
    pattern = "\|\|.+?\^"
    pre = "*://*."
    lines = filterList.read().splitlines()
    domains = []
    for line in lines:
        x = re.search(pattern, line)
        if x:
            domain = x.group(0)
            domain = domain[2:-1]
            domain = pre + domain + "/*"
            domains.append(domain)
    with open("domains.js", "w") as js_file:
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