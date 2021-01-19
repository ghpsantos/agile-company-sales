FROM python:3.7
WORKDIR /agile-sales

ENV VIRTUAL_ENV=/opt/venv
RUN python3 -m venv $VIRTUAL_ENV
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

RUN apt-get install libpq-dev

RUN export FLASK_APP=app.py
RUN export FLASK_ENV=development

RUN python3 -m pip install --upgrade pip
COPY . .
RUN pip install -r requirements.txt
