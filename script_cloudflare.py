#!/usr/bin/env python

import urllib.request
import http.client
import json
token = "Bearer 5Vngm4g2ty_5Dw0MW9Jou5GJcimC6Yy59tX60nrL"

conn = http.client.HTTPSConnection("api.cloudflare.com")

def getPubIp() :
    http = urllib.request.urlopen("https://ifconfig.me/ip")
    requete = http.read() #on récupère la page dans la requete
    myIp = requete.decode("utf-8") #formattage en utf8
    http.close()
    #print(myIp)
    return myIp

def getZone() :
    payload = ''
    headers = {
    'Authorization': ""+ token
    }
    conn.request("GET", "/client/v4/zones", payload, headers)
    res = conn.getresponse()

    data = res.read()
    jsonRep = json.loads(data.decode("utf-8"))
    #print(jsonRep)
    try :
        id = jsonRep["result"][0]["id"]
        return id
    except :
        print("result id not found")

def getList(id) :
    payload = ''
    headers = {
    'Authorization': ""+ token,
    'Cookie': '__cfduid=d58d9fdca931af3fa71755fe9be5842e31619767508; __cflb=0H28vgHxwvgAQtjUGU56Rb8iNWZVUvXhvGtNVPZq4K7; __cfruid=5a58572762a353246316eb1573cfd0aa6a4545dd-1619767509'
    }
    conn.request("GET", "/client/v4/zones/"+id+"/dns_records", payload, headers)
    res = conn.getresponse()
    data = res.read()
    jsonRep = json.loads(data.decode("utf-8"))
    try :
        idDns = jsonRep["result"][0]["id"]
        currIp = jsonRep["result"][0]["content"]
        return currIp, idDns
    except :
        print("wrong result")

def setIp(zoneId, dnsId, ip) :
    payload = "{\n    \"type\":\"A\",\n    \"name\":\"voxytech.fr\",\n    \"content\":\""+ ip +"\",\n    \"ttl\":1,\n    \"proxied\":true}"
    headers = {
    'Authorization': ""+ token,
    'Content-Type': 'text/plain',
    'Cookie': '__cfduid=d58d9fdca931af3fa71755fe9be5842e31619767508; __cflb=0H28vgHxwvgAQtjUGU56Rb8iNWZVUvXhvGtNVPZq4K7; __cfruid=5a58572762a353246316eb1573cfd0aa6a4545dd-1619767509'
    }
    conn.request("PUT", "/client/v4/zones/"+zoneId+"/dns_records/"+dnsId , payload, headers)
    res = conn.getresponse()
    data = res.read()
    jsonRep = json.loads(data.decode("utf-8"))

pubIp = getPubIp()
zoneId = getZone()
dnsIp, dnsId = getList(zoneId)

#print(dnsIp, dnsId)

if(pubIp != dnsIp) :
    setIp(zoneId, dnsId, pubIp)

