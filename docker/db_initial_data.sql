--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

-- Started on 2021-01-18 17:57:20

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;


--
-- Test DATABASE
--

CREATE DATABASE sales_test_database;

--
-- TOC entry 203 (class 1259 OID 33161)
-- Name: sale; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sale (
    id integer NOT NULL,
    product character varying NOT NULL,
    quantity integer NOT NULL,
    sale double precision NOT NULL,
    date timestamp without time zone NOT NULL,
    user_id integer,
    CONSTRAINT sale_quantity_check CHECK ((quantity > 0)),
    CONSTRAINT sale_sale_check CHECK ((sale > (0)::double precision))
);


ALTER TABLE public.sale OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 33159)
-- Name: sale_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sale_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sale_id_seq OWNER TO postgres;

--
-- TOC entry 3008 (class 0 OID 0)
-- Dependencies: 202
-- Name: sale_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sale_id_seq OWNED BY public.sale.id;


--
-- TOC entry 201 (class 1259 OID 33148)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying,
    name character varying NOT NULL,
    number character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 33146)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 3009 (class 0 OID 0)
-- Dependencies: 200
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 2859 (class 2604 OID 33164)
-- Name: sale id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale ALTER COLUMN id SET DEFAULT nextval('public.sale_id_seq'::regclass);


--
-- TOC entry 2858 (class 2604 OID 33151)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3002 (class 0 OID 33161)
-- Dependencies: 203
-- Data for Name: sale; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sale (id, product, quantity, sale, date, user_id) FROM stdin;
1	Laptop	6	2638.81	2021-01-09 02:33:23.684794	1
2	PC	3	4031.29	2021-01-09 02:33:23.684794	1
3	Wardrobe	10	6090.18	2021-01-09 02:33:23.684794	1
4	PC	2	5326.35	2021-01-09 02:33:23.684794	1
5	House	8	7650.93	2021-01-09 02:33:23.684794	1
6	House	8	9692.28	2021-01-09 02:33:23.684794	1
7	PC	1	8739.56	2021-01-09 02:33:23.684794	1
8	PC	8	3672.26	2021-01-09 02:33:23.684794	2
9	Car	7	6806.35	2021-01-09 02:33:23.684794	2
10	Wardrobe	10	8354.17	2021-01-09 02:33:23.684794	2
11	PC	7	6709.54	2021-01-09 02:33:23.684794	2
12	House	7	8857.79	2021-01-09 02:33:23.684794	3
13	House	7	1028.73	2021-01-09 02:33:23.684794	3
14	Car	3	9406.57	2021-01-09 02:33:23.684794	3
15	House	8	5060.32	2021-01-09 02:33:23.684794	3
16	PC	10	4637.88	2021-01-09 02:33:23.684794	4
17	PC	1	7040.76	2021-01-09 02:33:23.684794	4
18	Wardrobe	3	3924.6	2021-01-09 02:33:23.684794	5
19	Wardrobe	10	9793.47	2021-01-09 02:33:23.684794	5
20	Laptop	10	8956.71	2021-01-09 02:33:23.684794	5
21	Laptop	5	1453.16	2021-01-09 02:33:23.684794	5
22	Wardrobe	7	6134.67	2021-01-09 02:33:23.684794	5
23	Car	3	3394.7	2021-01-09 02:33:23.684794	5
24	PC	10	7793.26	2021-01-09 02:33:23.684794	5
25	Laptop	5	3062.11	2021-01-09 02:33:23.684794	5
26	Wardrobe	6	6615.11	2021-01-09 02:33:23.684794	5
27	PC	3	9368.19	2021-01-09 02:33:23.684794	6
28	Car	10	6922.16	2021-01-09 02:33:23.684794	6
29	House	2	4791.54	2021-01-09 02:33:23.684794	6
30	PC	10	7308.35	2021-01-09 02:33:23.684794	6
31	Wardrobe	3	1981.31	2021-01-09 02:33:23.684794	6
32	PC	6	2465.27	2021-01-09 02:33:23.684794	7
33	Laptop	10	2585.09	2021-01-09 02:33:23.684794	7
34	Wardrobe	7	8020.21	2021-01-09 02:33:23.684794	8
35	PC	2	1068.48	2021-01-09 02:33:23.684794	8
36	PC	1	6841.2	2021-01-09 02:33:23.684794	8
\.


--
-- TOC entry 3000 (class 0 OID 33148)
-- Dependencies: 201
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, username, name, number) FROM stdin;
1	josk	Joao	81 9999-9999
2	mpp	Maria	81 9999-9999
3	isp	Isabelly	81 9999-9999
4	vsp	Victor	81 9999-9999
5	lssv	Lais	81 9999-9999
6	psse	Pedro	81 9999-9999
7	rlsc	Ricardo	81 9999-9999
8	llv	Luiz	81 9999-9999
\.


--
-- TOC entry 3010 (class 0 OID 0)
-- Dependencies: 202
-- Name: sale_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sale_id_seq', 36, true);


--
-- TOC entry 3011 (class 0 OID 0)
-- Dependencies: 200
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 8, true);


--
-- TOC entry 2867 (class 2606 OID 33171)
-- Name: sale sale_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale
    ADD CONSTRAINT sale_pkey PRIMARY KEY (id);


--
-- TOC entry 2863 (class 2606 OID 33156)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 2865 (class 2606 OID 33158)
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- TOC entry 2868 (class 2606 OID 33172)
-- Name: sale sale_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale
    ADD CONSTRAINT sale_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


-- Completed on 2021-01-18 17:57:21

--
-- PostgreSQL database dump complete
--

