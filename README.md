# 

## Model
www.msaez.io/#/487999/storming/footprint

## Before Running Services
### Make sure there is a Kafka server running
```
cd kafka
docker-compose up
```
- Check the Kafka messages:
```
cd infra
docker-compose exec -it kafka /bin/bash
cd /bin
./kafka-console-consumer --bootstrap-server localhost:9092 --topic
```

## Run the backend micro-services
See the README.md files inside the each microservices directory:

- CodeService
- MetalOrderService
- MoldService


## Run API Gateway (Spring Gateway)
```
cd gateway
mvn spring-boot:run
```

## Test by API
- CodeService
```
 http :8088/codes id="id" itemCode="item_code" codeNo="code_no" code="code" codeName="code_name" isSys="is_sys" isUse="is_use" etc="etc" etc1="etc1" etc2="etc2" etc3="etc3" etc4="etc4" etc5="etc5" 
```
- MetalOrderService
```
 http :8088/metalOrders morderNo="morder_no" orderDt="order_dt" accountMon="account_mon" kangjong="kangjong" kongjung="kongjung" dia="dia" mcompNo="mcomp_no" price="price" orderAmt="order_amt" ownCompNo="own_comp_no" isEnd="is_end" worker="worker" requestDt="request_dt" confirmDt="confirm_dt" etc="etc" isAutoOrder="is_auto_order" isClose="is_close" closeNm="close_nm" closeTm="close_tm" isAdmit="is_admit" admitNm="admit_nm" admitTm="admit_tm" regiNm="regi_nm" regiDt="regi_dt" modiNm="modi_nm" modiDt="modi_dt" file1="file1" file2="file2" file3="file3" 
```
- MoldService
```
 http :8088/molds moldNo="mold_no" moldType="mold_type" prodNo="prod_no" progNo="prog_no" progTypeCode="prog_type_code" moldCode="mold_code" moldNumber="mold_number" moldNm="mold_nm" moldStandard="mold_standard" curSetMfIdx="cur_set_mf_idx" settingDt="setting_dt" lifeCycle="life_cycle" moldPrice="mold_price" fairStock="fair_stock" limitMin="limit_min" curStock="cur_stock" isManage="is_manage" moldDesign="mold_design" moldDesignCode="mold_design_code" moldPicture="mold_picture" keepPlace="keep_place" manage1="manage1" manage2="manage2" regiNm="regi_nm" regiDt="regi_dt" modiNm="modi_nm" modiDt="modi_dt" checkStandNum="check_stand_num" 
```


## Run the frontend
```
cd frontend
npm i
npm run serve
```

## Test by UI
Open a browser to localhost:8088

## Required Utilities

- httpie (alternative for curl / POSTMAN) and network utils
```
sudo apt-get update
sudo apt-get install net-tools
sudo apt install iputils-ping
pip install httpie
```

- kubernetes utilities (kubectl)
```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

- aws cli (aws)
```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

- eksctl 
```
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin
```

