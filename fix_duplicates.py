#!/usr/bin/env python3
import json
import os
import shutil
from datetime import datetime

def remove_duplicates(file_path):
    # Create backup with timestamp
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = f"{file_path}.{timestamp}.bak"
    shutil.copy2(file_path, backup_path)
    print(f"Created backup: {backup_path}")

    # Load the JSON data
    with open(file_path, 'r') as f:
        data = json.load(f)

    print(f"Original count: {len(data)} devices")

    # Track unique brand:model combinations
    seen = {}
    duplicates = []
    unique_devices = []

    for i, device in enumerate(data):
        brand = device.get('brand', '')
        model = device.get('model', '')
        key = f"{brand}:{model}"

        if key in seen:
            duplicates.append((i, key, seen[key]))
            # We'll use the later entry and discard the earlier one
            # Replace the earlier entry with the current one
            unique_devices[seen[key]] = device
        else:
            seen[key] = len(unique_devices)
            unique_devices.append(device)

    print(f"Found and removed {len(duplicates)} duplicates")

    if duplicates:
        print("Duplicates found:")
        for i, key, orig_idx in duplicates:
            print(f"  {key} at position {i} (duplicate of position {orig_idx})")

    # Save the deduplicated data
    with open(file_path, 'w') as f:
        json.dump(unique_devices, f, indent=2)

    print(f"Updated file with {len(unique_devices)} unique devices")
    return len(duplicates)

if __name__ == "__main__":
    file_path = "./device_compatibility_matrix.json"
    remove_duplicates(file_path)
