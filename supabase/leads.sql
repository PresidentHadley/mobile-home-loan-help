create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text not null,
  state text not null,
  property_state text not null,
  home_type text not null,
  credit_range text not null,
  timeline text not null,
  additional_info text,
  source_page text not null,
  ip_address text,
  user_agent text,
  status text default 'new'
);

alter table leads enable row level security;

